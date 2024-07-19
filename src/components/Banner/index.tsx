import Link from "next/link";
import { BannerWrapper } from "./banner.styled"

const Banner = () => {
    return <BannerWrapper>
            <div className="ban_img">
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="banner" />
                <div className="ban_text">
                    <p className="mb-3">
                    <strong>
                        Welcome to Employee&apos;s
                    </strong>
                    </p>
                    <p className="text-white">{new Date().toDateString()}</p>
                </div>
            </div>
    </BannerWrapper>

}

export default Banner;