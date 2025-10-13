import styles from './HeroComp.module.scss'
import bg from '../assets/bg.png'
import lake from '../assets/02.png'
import house from '../assets/04.png'
import tree from "../assets/06.png"
import nearMountainsLeft from "../assets/05.png"
import nearMountainsRight from "../assets/03.png"
import upCloseTrees from "../assets/treees.png"
import { motion, useScroll, useTransform } from "framer-motion"

const HeroComp = () => {
  const { scrollY } = useScroll();
  const superSlowElement = useTransform(scrollY, [0, 5000], [0, -300])
  const slowElement = useTransform(scrollY, [0, 5000], [0, -1900])
  const fasterElement = useTransform(scrollY, [0, 5000], [0, -2100])
  const evenFasterElement = useTransform(scrollY, [0, 5000], [0, -2300])
  const titleElement = useTransform(scrollY, [0, 5000], [0, -2800])

  return (
    <section className={styles.scene}>
        <motion.div
          style={{ y: superSlowElement }}
          className={styles.moon}>
        </motion.div>
        <motion.div
          style={{ y: superSlowElement }}
          className={styles.moonlight}>
        </motion.div>
        <motion.img
          src={bg}
          style={{ y: slowElement }}
          className={styles.bg}
          alt="background mountains" />
        <motion.img
          src={lake}
          style={{ y: fasterElement }}
          className={styles.lake}
          alt="lake of the mountain" />
        <motion.img
          src={house} 
          style={{ y: evenFasterElement }}
          className={styles.house} 
          alt="house on the lake" />
        <motion.h1
            style={{ y: titleElement }}
            initial={{ opacity: 0, y: -90 }}
			      whileInView={{ opacity: 1, y: 0 }}
			      transition={{ duration: 1.1, delay: 0.5 }}
			      className={styles.title}>
			    Medieval Sharpness
        </motion.h1>
        <motion.img src={tree} className={styles.tree} alt="tree" />
        <motion.img src={nearMountainsLeft} className={styles.nearMountainsLeft} alt="near mountains left" />
        <motion.img src={nearMountainsRight} className={styles.nearMountainsRight} alt="near mountains right" />
        <motion.img src={upCloseTrees} className={styles.upCloseTrees} alt="up close trees"/>
    </section>
  )
}

export default HeroComp