import './Main.css';
import discord from '../assets/Discord.png';

function Main() {
  return (
    <div className='main'>
      <div className='leftMain'>
        <h1>
          Welcome to <span>Ensignia</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem error,
          eveniet repudiandae ex at officiis animi suscipit explicabo eaque magnam, voluptatem a
          atque quasi eum praesentium quibusdam. Aspernatur suscipit a necessitatibus accusamus
          voluptatum sint quaerat. Ex distinctio natus assumenda dolore. Fugiat cupiditate
          laboriosam voluptatum iste repellendus numquam modi dignissimos.
        </p>
        <a href='https://discord.gg/XDcVmynq' target='_blank' rel='noreferrer'>
          <span className='discord'>
            <img src={discord} alt='discord logo' /> Join our Discord
          </span>
        </a>
      </div>
      <div className='rightMain'>
        <div className='main-right-bg'>
          <div className='main-right-content'>
            <h2>Oct 01, 2022 03:00PM (IST)</h2>
            <h4>Registrations</h4>
            <h2>Oct 10, 2022 03:00PM (IST)</h2>
            <h4>Capture the Flag</h4>
            <h4>Starts</h4>
            <h2>Oct 15, 2022 03:00PM (IST)</h2>
            <h4>Capture the Flag</h4>
            <h4>Ends</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
