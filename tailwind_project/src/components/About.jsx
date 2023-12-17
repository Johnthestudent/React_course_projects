import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Why to learn web development and try out things you like about it or you have the courage for?
            Because there is a desire in you for understanding how does it work, the stuff you use on the Internet
            on a daily basis.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;