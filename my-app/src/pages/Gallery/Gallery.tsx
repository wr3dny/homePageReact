import { Outlet, Link } from "react-router-dom"
import { GalleryOne } from "./GalleryOne"
import { GalleryTwo } from "./GalleryTwo"
import { ROUTES } from "../../routes"

export const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            <nav>
                <ul>
                    <li><Link to={ROUTES.galleryOne}>{GalleryOne()}</Link></li>
                    <li><Link to={ROUTES.galleryTwo}>{GalleryTwo()}</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}