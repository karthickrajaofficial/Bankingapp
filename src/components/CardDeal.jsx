import { card } from "../assets"
import styles,{layout} from "../style"
import Button
 from "./Button"
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Automated invoicing tools simplify the billing process, reducing errors and saving time. Detailed invoices enhance transparency,  with a clear breakdown of services rendered and associated costs.
     <br/> <Button styles='mt-10'/>
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )
}

export default CardDeal
