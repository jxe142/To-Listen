import styles from './index.module.scss';
import useAuth from '../hooks/useAuth'

const DashBoard = ({ code }) => {
  const token = useAuth(code)
  return <>THis is the dashboard with code: {code}</>;
};

let codePrama;
if (typeof window !== 'undefined')
  codePrama = new URLSearchParams(window?.location.search).get('code');

export function Index() {
  return codePrama ? (
    <DashBoard code={codePrama} />
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      This is a test
    </div>
  );
}

export default Index;
