import { Button } from '../components/Button'

export const Subscribe = () => {
  return (
    <section className="
    max-container flex justify-between items-center max-lg:flex-col gap-10
    
    "id="contact-us">
    <h3 className="text-4xl leading-[680px] lg:max-w-md font-palanquin font-bold">
Insrivez-vous à notre <span className="text-red-500 gap-2"> newsletter </span> pour recevoir les dernières <span className="text-red-500 gap-2"> actualités </span> aisin que nos <span className="text-red-500 gap-2"> offres spéciales</span>
    </h3>
    <div className="lg:max-w-[40%]
    w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-500 
    rounded-full
    
    ">
      <input type="text" 
    placeholder=" inscription@nike.com"
    className="input" 
    />
    <div className="flex max-sm:justify-end items-center max-sm:w-full ">

    <Button 
    label="S'inscrire" 
    fullwidth
    />
    </div>
    </div>
    
    

    </section>
  )
}
