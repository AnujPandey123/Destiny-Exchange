import { Inter } from 'next/font/google'
import EQbeats from '@/Components/beats'
import Slider from '@/Components/slider'
import Silder2 from '@/Components/hi'
import Text2Message from '@/Components/text2'
import OpenVacanciesSection from '@/Components/vacancies'
import Slider3 from '@/Components/slide'
import Footer from '@/Components/end'
import AnimationOne from '@/Components/animation'
import React from "react";
import MeetApp from "../components/MeetApp";
import Wondered from "@/Components/new";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <AnimationOne/>
     <EQbeats/>
     
     <Slider/>
     <Silder2/>
     <Text2Message/>
     
     <Slider3/>
     <MeetApp/>


     <Wondered/>

     <OpenVacanciesSection/>
     <Footer/>
    </>
  )
}
