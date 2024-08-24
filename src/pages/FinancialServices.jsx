import { useParams } from 'react-router-dom';
import { Footer, Header } from '../component';

const FinancialServices = () => {
  const { finance } = useParams();

  const renderContent = () => {
    switch (finance) {
      case 'commercial-finance':
        return <div>Commercial Finance content goes here...</div>;
      case 'project-finance':
        return <div>Project Finance content goes here...</div>;
      default:
        return <div>Welcome to Financial Services!</div>;
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header/>
      <h1>{finance.replace('-', ' ').toUpperCase()}</h1>
      {renderContent()}
      <Footer/>
    </div>
  );
};

export default FinancialServices;
