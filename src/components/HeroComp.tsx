import styles from './HeroComp.module.scss'
import bg from '../assets/bg.png'
import lake from '../assets/02.png'
import house from '../assets/04.png'
import tree from "../assets/06.png"
import nearMountainsLeft from "../assets/05.png"
import nearMountainsRight from "../assets/03.png"
import upCloseTrees from "../assets/treees.png"
import { motion } from "framer-motion"

const HeroComp = () => {
  return (
    <section className={styles.scene}>
        <div className={styles.moon}></div>
        <div className={styles.moonlight}></div>
        <img src={bg} className={styles.bg} alt="background mountains" />
        <img src={lake} className={styles.lake} alt="lake of the mountain" />
        <img src={house} className={styles.house} alt="house on the lake" />
        <motion.h1
            initial={{ opacity: 0, y: -90 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.1, delay: 0.5 }}
			className={styles.title}
            >
			Medieval Sharpness
        </motion.h1>
        <img src={tree} className={styles.tree} alt="tree" />
        <img src={nearMountainsLeft} className={styles.nearMountainsLeft} alt="near mountains left" />
        <img src={nearMountainsRight} className={styles.nearMountainsRight} alt="near mountains right" />
        <img src={upCloseTrees} className={styles.upCloseTrees} alt="up close trees"/>
    </section>
  )
}

export default HeroComp