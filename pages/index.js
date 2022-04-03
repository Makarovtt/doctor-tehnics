import Section1 from '../components/crumbs/Section1';
import Section2 from '../components/crumbs/Section2';
import Section3 from '../components/crumbs/Section3';
import Section_form from '../components/crumbs/Section_form';
import Section_slider from '../components/crumbs/Section_slider';

export default function Home() {
  return (
    <div>
      <Section_slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section_form />
    </div>
  )
}
