export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abhay Kushwaha",
        "url": "https://abhaykushwaha.dev",
        "jobTitle": "Full Stack Developer & AI Engineer",
        "sameAs": [
            "https://github.com/abhaykushwaha",
            "https://linkedin.com/in/abhaykushwaha",
            "https://twitter.com/abhaykushwaha"
        ],
        "description": "Full Stack Developer and AI/ML Enthusiast building innovative solutions.",
        "knowsAbout": ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Machine Learning", "AI"]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
