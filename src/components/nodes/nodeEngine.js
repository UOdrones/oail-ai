import { generateRoute, randomRange } from './geometry';

class NodeEngine {
    constructor() {
        this.routes = [];
        this.stamps = [];
        this.config = {
            maxRoutes: { desktop: 8, mobile: 5 },
            maxStamps: { desktop: 80, mobile: 45 },
            spawnRate: { min: 300, max: 900 },
            routeDuration: { min: 900, max: 1800 },
            stampPersistence: { min: 3000, max: 8000 },
            baseRadius: 120, // Distance to start from logo center
            maxRouteDistance: 1400 // Expanded max distance to travel from center
        };

        this.state = {
            hoverState: false,
            lastSpawnTime: 0,
            nextSpawnDelay: 500,
            isMobile: false,
        };
    }

    init(isMobile) {
        this.state.isMobile = isMobile;
    }

    setHover(isHovering) {
        this.state.hoverState = isHovering;
    }

    update(timestamp, centerX, centerY) {
        // 1. Spawn new routes
        const maxActiveRoutes = this.state.isMobile ? this.config.maxRoutes.mobile : this.config.maxRoutes.desktop;
        const maxActiveStamps = this.state.isMobile ? this.config.maxStamps.mobile : this.config.maxStamps.desktop;

        if (this.routes.length < maxActiveRoutes && timestamp - this.state.lastSpawnTime > this.state.nextSpawnDelay) {
            if (this.stamps.length < maxActiveStamps) {
                this.spawnRoute(timestamp, centerX, centerY);
                this.state.lastSpawnTime = timestamp;

                // Faster spawns during hover
                const multiplier = this.state.hoverState ? 0.3 : 1;
                this.state.nextSpawnDelay = randomRange(this.config.spawnRate.min, this.config.spawnRate.max) * multiplier;
            }
        }

        // 2. Update active routes
        for (let i = this.routes.length - 1; i >= 0; i--) {
            const route = this.routes[i];
            const elapsed = timestamp - route.startTime;
            route.progress = Math.min(elapsed / route.duration, 1);

            if (route.progress >= 1) {
                // Route complete, create stamp
                this.stamps.push({
                    x: route.end.x,
                    y: route.end.y,
                    path: route.path,
                    createdAt: timestamp,
                    duration: randomRange(this.config.stampPersistence.min, this.config.stampPersistence.max)
                });

                this.routes.splice(i, 1);
            }
        }

        // 3. Update active stamps
        for (let i = this.stamps.length - 1; i >= 0; i--) {
            const stamp = this.stamps[i];
            const elapsed = timestamp - stamp.createdAt;
            stamp.opacity = Math.max(0, 1 - (elapsed / stamp.duration));

            if (stamp.opacity <= 0) {
                this.stamps.splice(i, 1);
            }
        }
    }

    spawnRoute(timestamp, centerX, centerY) {
        const routeGeom = generateRoute(centerX, centerY, this.config.baseRadius, this.config.maxRouteDistance);

        this.routes.push({
            ...routeGeom,
            startTime: timestamp,
            duration: randomRange(this.config.routeDuration.min, this.config.routeDuration.max),
            progress: 0
        });
    }

    getRenderData() {
        return {
            routes: this.routes,
            stamps: this.stamps,
            hoverState: this.state.hoverState
        };
    }
}

export const engine = new NodeEngine();
