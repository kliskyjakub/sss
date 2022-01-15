import Navigation from "../navigation/Navigation";
import SuperfluidSDK from "@superfluid-finance/js-sdk";
import { Web3Provider } from "@ethersproject/providers";
import { useContext } from "react";

const Main = () => {
  const { walletAddress } = useContext(WalletContext);
  useEffect(() => {
    const initialiseSuperfluid = async () => {
      const sf = new SuperfluidSDK.Framework({
        ethers: new Web3Provider(window.ethereum),
      });
      await sf.initialize();

      const carol = sf.user({
        address: walletAddress,
        token: "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
      });

      const details = await carol.details();
      console.log(details);
    };

    initialiseSuperfluid();
  }, []);

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Main;
