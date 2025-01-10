import SectionWrapper from "../../SectionWrapper";

const faqsList = [
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01
    },
   
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-600">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                    {process.env.NEXT_PUBLIC_FAQ_MAIN_TITLE}
                </h2>
                <p className="mt-3">
                    {process.env.NEXT_PUBLIC_FAQ_SECONDARY_TITLE} {" "}
                    <a
                        className='text-blue-600 hover:text-blue-400 duration-150 font-semibold whitespace-nowrap'
                        href={process.env.NEXT_PUBLIC_FAQ_EMAIL_ADDRESS}>
                        contact us
                    </a>.
                </p>
            </div>
            <div className='mt-12'>
                <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                    {faqsList.map((item, idx) => (
                        <li
                            key={idx}
                            className="space-y-3"
                        >
                            <summary
                                className="flex items-center justify-between font-semibold text-gray-700">
                                {item.q}
                            </summary>
                            <p
                                dangerouslySetInnerHTML={{ __html: item.a }}
                                className='leading-relaxed'>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs