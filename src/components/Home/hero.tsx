"use client"
import React, {useEffect, useState} from 'react';

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

            <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Main Hero Container */}
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="relative">
                        {/* Slides */}
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`transition-opacity duration-700 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                                }`}
                            >
                                <div className={`bg-gradient-to-br ${slide.bgGradient} rounded-3xl overflow-hidden shadow-2xl`}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
                                        {/* Left Content */}
                                        <div className="space-y-6 z-10">
                                            {/* Badge */}
                                            {slide.badge && (
                                                <Badge className="bg-white text-primary hover:bg-white/90 text-sm px-4 py-1.5 gap-2">
                                                    <Sparkles className="h-4 w-4" />
                                                    {slide.badge}
                                                </Badge>
                                            )}

                                            {/* Subtitle */}
                                            <p className="text-primary font-semibold text-lg uppercase tracking-wide">
                                                {slide.subtitle}
                                            </p>

                                            {/* Title */}
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Description */}
                                            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                                                {slide.description}
                                            </p>

                                            {/* CTA Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                                <Link href="/shop">
                                                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                                                        <ShoppingBag className="h-5 w-5" />
                                                        {slide.primaryCTA}
                                                    </Button>
                                                </Link>
                                                <Link href="/categories">
                                                    <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                                                        {slide.secondaryCTA}
                                                        <ArrowRight className="h-5 w-5" />
                                                    </Button>
                                                </Link>
                                            </div>

                                            {/* Stats or Features */}
                                            <div className="flex gap-8 pt-6">
                                                <div>
                                                    <p className="text-3xl font-bold text-gray-900">10K+</p>
                                                    <p className="text-sm text-gray-600">Happy Customers</p>
                                                </div>
                                                <div>
                                                    <p className="text-3xl font-bold text-gray-900">5K+</p>
                                                    <p className="text-sm text-gray-600">Products</p>
                                                </div>
                                                <div>
                                                    <p className="text-3xl font-bold text-gray-900">50+</p>
                                                    <p className="text-sm text-gray-600">Categories</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Image */}
                                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
        </div>
    );
};

export default hero;
