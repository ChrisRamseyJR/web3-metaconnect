import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";

export default function Home() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className='main'>
      <h2>Connect Your Wallet</h2>
      <button onClick={connect} className='connect-button'>
        Connect to MetaMask
      </button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>Not connected</span>
      )}
      <button onClick={disconnect} className='disconnect-button'>
        Disconnect
      </button>
    </div>
  );
}
