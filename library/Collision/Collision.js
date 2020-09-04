export default class Collision {
    aabb = (actor1, actor2) => {
        return (actor1.x < actor2.x + actor2.w &&
            actor1.x + actor1.w > actor2.x &&
            actor1.y < actor2.y + actor2.h &&
            actor1.y + actor1.h > actor2.y)
    }
}