import Header from './components/Header';
import SelectButton from './components/UI/SelectButton';

export default function Home() {
    return (
        <div className='bg-mobile-light w-full h-[16rem] bg-no-repeat bg-cover bg-center'>
            <Header />
            <SelectButton />
        </div>
    );
}
