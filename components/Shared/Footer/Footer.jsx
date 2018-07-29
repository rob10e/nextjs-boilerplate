import { TITLE, COMPANY, YEAR } from '../../../contants';

export default () => (
  <footer className="text-light bg-dark">
    {TITLE}
    {' '}
- &copy;&nbsp;
    {COMPANY}
    {' '}
    {YEAR}
  </footer>
);
