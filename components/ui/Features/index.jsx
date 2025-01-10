import DarkWrapper from "../../DarkWrapper"

const Features = () => {

    const features = [
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW01_COL01,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW01_COL01
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW01_COL02,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW01_COL02
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW02_COL01,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW02_COL01
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW02_COL02,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW02_COL02
        },
    ]

    return (
        <DarkWrapper id="features">
            <div className="custom-screen text-gray-300 justify-between gap-24 lg:flex">
                <div className="max-w-xl">
                    <h2 className="text-white text-3xl font-semibold sm:text-4xl">
                        {process.env.NEXT_PUBLIC_FEATURES_SECTION_TITLE}
                    </h2>
                    <p className="mt-3">
                        {process.env.NEXT_PUBLIC_FEATURES_SECTION_DESCRIPTION}
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        <p className="text-lg font-semibold">
                                            {idx + 1}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </DarkWrapper>
    )
}

export default Features