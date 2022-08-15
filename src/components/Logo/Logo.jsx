import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

import './Logo.scss'

import LogoB from '../../assets/images/oxirgisi-b.png'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const [displayNone, setDisplayNone] = useState("")

  useLayoutEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDisplayNone('display-none')
    }, 4200)
  })

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoB}
        alt="JavaScript,  Developer"
        width='600'
        height= 'auto'
      />
      <svg
        className={`${displayNone}`}
        width="559pt"
        height="950pt"
        version="1.1"
        viewBox="0 0 559 950"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M147.564,196.418h107.112c30.991,0,56.203-25.213,56.203-56.204c0-30.991-25.213-56.205-56.204-56.205H147.564
				c-5.522,0-10,4.478-10,10v92.409C137.564,191.94,142.042,196.418,147.564,196.418z M157.564,104.009h97.111
				c19.963,0,36.204,16.241,36.204,36.205c0,19.963-16.241,36.204-36.204,36.204h-97.111V104.009z
				M285.653,260.427H147.564c-5.522,0-10,4.478-10,10v137.564c0,5.522,4.478,10,10,10h138.089
				c43.441,0,78.782-35.342,78.782-78.782C364.435,295.769,329.093,260.427,285.653,260.427z M285.653,397.991H157.564V280.427
				h128.089c32.412,0,58.782,26.369,58.782,58.782S318.065,397.991,285.653,397.991z
				M426.98,258.478c-11.995-20.918-28.588-39.018-48.335-52.815c10.652-20.111,16.243-42.545,16.243-65.449
				C394.889,62.899,331.989,0,254.676,0H105.56C76.885,0,53.556,23.329,53.555,52.004v397.992c0,28.675,23.329,52.004,52.004,52.004
				h180.093c89.764,0,162.791-73.027,162.792-162.792C448.444,310.883,441.022,282.967,426.98,258.478z M285.654,482H105.56
				c-17.648,0-32.004-14.357-32.004-32.004V52.004C73.556,34.356,87.913,20,105.56,20h149.116
				c66.285,0,120.213,53.928,120.213,120.214c0,22.438-6.259,44.346-18.099,63.354c-1.408,2.262-1.856,4.992-1.244,7.585
				c0.612,2.593,2.235,4.835,4.506,6.228c42.826,26.256,68.393,71.799,68.393,121.828C428.445,417.944,364.389,482,285.654,482z
				"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
