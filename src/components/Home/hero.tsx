"use client"
import React, {useState} from 'react';

const hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slides: HeroSlide[] = [
        {
            id: 1,
            title: "Summer Collection 2024",
            subtitle: "New Arrivals",
            description: "Discover the latest trends in fashion and electronics. Up to 50% off on selected items.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
            badge: "50% OFF",
            primaryCTA: "Shop Now",
            secondaryCTA: "View Collection",
            bgGradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            id: 2,
            title: "Tech Gadgets",
            subtitle: "Smart Living",
            description: "Upgrade your lifestyle with cutting-edge technology and innovative gadgets.",
            image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&h=800&fit=crop",
            badge: "NEW",
            primaryCTA: "Explore Tech",
            secondaryCTA: "Learn More",
            bgGradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 3,
            title: "Home & Living",
            subtitle: "Comfort Redefined",
            description: "Transform your space with our curated collection of furniture and home decor.",
            image: "https://images.unsplash.com/photo-1484502249930-e1da807099a5?w=1200&h=800&fit=crop",
            badge: "TRENDING",
            primaryCTA: "Shop Home",
            secondaryCTA: "Browse Categories",
            bgGradient: "from-orange-500/20 to-yellow-500/20"
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [slides.length])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <div>
            <div>
                <div>
                    <p>WELCOME to E SHOP</p>
                    <div>
                        <button className="">Search</button>
                        <button className="button_next">Get started</button>
                    </div>
                </div>
                <div>
                    <img className="" alt={""}/>
                </div>
            </div>
        </div>
    );
};

export default hero;
