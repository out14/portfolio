import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


type PageTransitionContextType = {
    transitionTo: (path: string) => void
}


const PageTransitionContext =
    createContext<PageTransitionContextType | null>(null)


export const usePageTransition = () => {

    const context = useContext(PageTransitionContext)

    if (!context) {
        throw new Error(
            'usePageTransition must be used inside PageTransitionProvider'
        )
    }

    return context
}


export const PageTransitionProvider = ({
    children,
}: {
    children: ReactNode
}) => {

    const navigate = useNavigate()
    const location = useLocation()

    const [isActive, setIsActive] = useState(false)
    const [isLeaving, setIsLeaving] = useState(false)


    const transitionTo = (path: string) => {

        if (path === location.pathname) {
            return
        }

        // 맥주가 올라오기 시작
        setIsActive(true)

        // 화면을 완전히 덮은 후 페이지 이동
        setTimeout(() => {

            navigate(path)

            // 새 페이지에서 맥주가 내려감
            setIsLeaving(true)

            setTimeout(() => {
                setIsActive(false)
                setIsLeaving(false)
            }, 1500)

        }, 1500)
    }


    return (
        <PageTransitionContext.Provider
            value={{ transitionTo }}
        >

            {children}

            {/* <div
                className={[
                    'beer-transition',
                    'is-active',
                    isLeaving && 'is-hide',
                ]
                    .filter(Boolean)
                    .join(' ')}
            > */}
 
            <div
                className={[
                    'beer-transition',
                    isActive && 'is-active',
                    isLeaving && 'is-hide',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >

                <div className="beer-transition__liquid">

                    {/* 뒤쪽 파도 */}
                    <svg
                        className="beer-transition__wave beer-transition__wave--back"
                        viewBox="0 0 1440 220"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="
                                M0 135
                                C140 110 250 105 360 130
                                C470 155 570 150 680 125
                                C790 100 890 105 1000 135
                                C1110 165 1220 155 1320 125
                                C1370 110 1410 115 1440 130
                                L1440 220
                                L0 220
                                Z
                            "
                        />
                    </svg>


                    {/* 메인 파도 */}
                    <svg
                        className="beer-transition__wave beer-transition__wave--main"
                        viewBox="0 0 1440 220"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="
                                M0 125
                                C120 95 220 90 330 120
                                C440 150 530 155 640 115
                                C750 75 830 70 930 110
                                C1040 150 1140 155 1240 115
                                C1320 85 1380 95 1440 120

                                L1440 220
                                L0 220
                                Z
                            "
                        />
                    </svg>


                    {/* 거품 */}
                    {/* 기포 */}
                    <div className="beer-transition__bubbles">
                        {Array.from({ length: 50 }).map((_, index) => (
                            <i key={index} />
                        ))}

                    </div>

                </div>

            </div>

        </PageTransitionContext.Provider>
    )
}