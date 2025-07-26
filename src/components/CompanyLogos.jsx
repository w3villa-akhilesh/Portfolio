import {geeksforgeeks,scaler,tutorialspoint,leetcode,codechef} from "../assets/index.js";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
      They have been instrumental in strengthening my foundation in coding and problem-solving.
      </h5>
      <ul className="flex">
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={geeksforgeeks} width={180} height={28} alt='geeksforgeeks' />
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={leetcode} className='rounded-full w-auto h-8' alt='leetcode' />
            <p className="font-semibold text-xl m-1">Leetcode</p>
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={codechef} className='rounded-full w-auto h-8' alt='codechef' />
            <p className="font-semibold text-xl m-1">Codechef</p>
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={tutorialspoint} width={180} height={28} alt='tutorialspoint' />
          </li>

          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={scaler} width={190} height={28} alt='scaler' />
          </li>

      </ul>
    </div>
  );
};

export default CompanyLogos;