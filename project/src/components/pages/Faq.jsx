import React, { useState } from 'react';
import Bredcum from '../layer/Bredcum';
import Container from '../layer/Container';
import faq from '../../assets/faq.png'
import ImageWithBorder from '../ImageWithBorder';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item mb-4 border border-transparent  hover:border-[#DCCA87] transition-colors duration-300 w-[586px]">
      <button
        className="accordion-title w-full text-left py-4 px-6  bg-[#242424] text-white focus:outline-none hover:text-[#DCCA87]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content py-4 px-6  bg-[#242424] text-[#AAAAAA]">
          {content}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <>
      <Bredcum text="Frequently Asked Questions" />

      <div className=" py-10">
      <Container>
        <div className=" flex  gap-x-8 justify-center  items-center">
          <div className="left">
            <ImageWithBorder src={faq} className='object-cover h-full w-full'/>
          </div>
          <div className="right  p-4">
            <Accordion
              title="How Do I Reach To The Restaurant?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <Accordion
              title="Is There A Reservation Required?"
              content="Content for Is There A Reservation Required?"
            />
            <Accordion
              title="Can I Host An Event At The Restaurant?"
              content="Content for Can I Host An Event At The Restaurant?"
            />
            <Accordion
              title="Is Valet Parking Available At The Restaurant?"
              content="Content for Is Valet Parking Available At The Restaurant?"
            />
            <Accordion
              title="When Are The Happy Hours Of Your Bar?"
              content="Content for When Are The Happy Hours Of Your Bar?"
            />
            <Accordion
              title="Is Seafood Available At The Restaurant?"
              content="Content for Is Seafood Available At The Restaurant?"
            />
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Faq;
