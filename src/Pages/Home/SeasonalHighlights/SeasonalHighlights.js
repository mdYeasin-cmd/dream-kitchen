import React from 'react';
import './SeasonalHighlights.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const highlights = [
    {
        title: 'Seasonal Menu Planning',
        description: 'Curated weekly menus that celebrate fresh produce and balanced flavors.'
    },
    {
        title: 'Chef-Guided Prep',
        description: 'Step-by-step prep tips so every recipe turns out consistent and delicious.'
    },
    {
        title: 'Family-Ready Portions',
        description: 'Flexible servings with smart leftovers for easy weekday meals.'
    }
];

const SeasonalHighlights = () => {
    return (
        <section className="seasonal-highlights">
            <div className="container">
                <SectionHeader
                    title="Seasonal Kitchen Highlights"
                    lede="Discover the ideas that inspire my kitchen every week, from thoughtful planning to chef-tested techniques that keep meals fresh and flavorful."
                    align="text-center"
                    className="mb-5"
                    ledeClassName="seasonal-description"
                />
                <div className="row g-4">
                    {highlights.map((item) => (
                        <div className="col-12 col-md-4" key={item.title}>
                            <div className="seasonal-card h-100 p-4 text-center">
                                <h3 className="fs-4 fw-semibold mb-3">{item.title}</h3>
                                <p className="mb-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeasonalHighlights;
