import SectionWrapper from "../../SectionWrapper"

const stats = [
    {
        data: process.env.NEXT_PUBLIC_STATS_SECTION_DATA01,
        desc: process.env.NEXT_PUBLIC_STATS_SECTION_DATA01_DESCRIPTION
    },
    {
        data: process.env.NEXT_PUBLIC_STATS_SECTION_DATA02,
        desc: process.env.NEXT_PUBLIC_STATS_SECTION_DATA02_DESCRIPTION
    },
    {
        data: process.env.NEXT_PUBLIC_STATS_SECTION_DATA03,
        desc: process.env.NEXT_PUBLIC_STATS_SECTION_DATA03_DESCRIPTION
    },
    {
        data: process.env.NEXT_PUBLIC_STATS_SECTION_DATA04,
        desc: process.env.NEXT_PUBLIC_STATS_SECTION_DATA01_DESCRIPTION
    },    
]

const Stats = () => (
    <SectionWrapper>
        <div className="custom-screen text-gray-600">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    {process.env.NEXT_PUBLIC_STATS_SECTION_TITLE}
                </h3>
                <p className="mt-3">
                    {process.env.NEXT_PUBLIC_STATS_SECTION_DESCRIPTION}
                </p>
            </div>
            <div className="mt-12">
                <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="sm:max-w-[15rem]">
                                <h4 className="text-4xl text-blue-600 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.desc}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default Stats