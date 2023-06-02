import '@/styles/globals.css'
import "@/styles/transition.css"
import "@/styles/languageSelector.css"

import Transition from '../components/Transition/Transition';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';

export default function App({ Component, pageProps }) {
  return (    
  <>
    <LanguageSelector />
    <Transition>
      <Component {...pageProps} />
    </Transition>
    </>
  )
}
