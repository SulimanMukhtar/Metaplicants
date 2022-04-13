var submit = document.getElementById("mint");
var connect = document.getElementById("connectbtn");
var amount = document.getElementById('amount');

var box = document.getElementById("box");
var MainForm = document.getElementById("mainForm");
var result = document.getElementById("result");
let accountAddress = document.getElementById('account');
let accountBalance = document.getElementById('balance');
let ShowAccount = document.getElementById('showAccount');
let ShowBalance = document.getElementById('showBalance');
let ShowResult = document.getElementById('showResult');
result.style.display = "none";
const Contract = "0xF6f289e24B2225E5A8C56fa8f33a61D60a37a572";
const ABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "Giveaway", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "UnrevealedURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPublic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxWhitelist", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "merkleRoot", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "publicCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_whitelistCost", "type": "uint256" }, { "internalType": "uint256", "name": "_publicCost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_whitelist", "type": "uint256" }, { "internalType": "uint256", "name": "_public", "type": "uint256" }], "name": "setMax", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_merkleRoot", "type": "bytes32" }], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setRevealed", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_roundTokens", "type": "uint256" }], "name": "setRoundTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_UnrevealedUri", "type": "string" }], "name": "setUnrevealedUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setWhitelistEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelistClaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_merkleProof", "type": "bytes32[]" }], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const isMetaMaskConnected = async () => {

    const accounts = await provider.listAccounts();
    return accounts.length > 0;
}

if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    signer = provider.getSigner();

    instance = new ethers.Contract(Contract, ABI, signer);


    isMetaMaskConnected().then(async (connected) => {
        if (connected) {

            getAccount();

        } else {

            console.log('Not Connected');
            submit.style.display = "none";
            accountAddress.style.display = "none";
            accountBalance.style.display = "none";



        } {

        }
    });

    ethereum.on('disconnect', () => window.location.reload());
    ethereum.on('accountsChanged', () => window.location.reload());
    ethereum.on('networkChanged', () => window.location.reload());
} else {
    // if no window.ethereum then MetaMask is not installed
    // MainForm.style.display = "none";


    submit.style.display = "none";
    accountAddress.style.display = "none";
    accountBalance.style.display = "none";



    // MainForm.style.display = "block";


    alert(
        "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
    );
}



let account;
let balance;

console.log(instance);



// console.log(signer);




async function switchNetwork() {

    // Check if MetaMask is installed
    // MetaMask injects the global API into window.ethereum
    if (window.ethereum) {

        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x4' }],
            });

        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4001) {
                console.log("Please Switch To Ethereum Mainnet");
            }
            // handle other "switch" errors
        }
    } else {
        // if no window.ethereum then MetaMask is not installed
        alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }

}


async function getAccount() {
    switchNetwork();
    account = await signer.getAddress();
    balance = await signer.getBalance();
    account = ` ${account.substring(0, 5)}***${account.substring(account.length - 5)}`
    accountAddress.style.display = "block";
    accountBalance.style.display = "block";
    connect.style.display = "none";
    ShowAccount.innerHTML = account;
    balance = balance.toString() / 10 ** 18;
    ShowBalance.innerHTML = balance.toFixed(2) + " ETH";
    // console.log(await instance.token());
    // console.log(await instance.Active());
    console.log(account);
    console.log(balance.toString() / 10 ** 18);
    submit.style.display = "inline";
}

async function Mint() {
    await switchNetwork();
    let NFTamount = amount.value;
    if (NFTamount < 1 || NFTamount > 3)
        return alert("Whitelist Stage : Please enter a value between 1 and 3");
    let account = await signer.getAddress();
    let price;
    var Status = await instance.whitelistEnabled();
    let ETHPaid;

    let addresses = ["0xe2aB0BEaeBaC45f2BBE41AE6fa419b24Efe45f38"];
    const leaf = addresses.map(addr => keccak256(addr));
    const Merkletree = new MerkleTree(leaf, keccak256, { sortPairs: true });

    const rootHash = Merkletree.getRoot();
    const adddd = keccak256(account);

    const proof = Merkletree.getHexProof(adddd);
    console.log(Merkletree.toString())
    // , { value: ethers.utils.parseUnits(ETHPaid.toString()) }
    if (!Status) {
        price = await instance.publicCost();
        ETHPaid = price * NFTamount / 10 ** 18;
        console.log(ETHPaid.toString());
        await instance.mint(NFTamount, { value: ethers.utils.parseUnits(ETHPaid.toString()) })
            .then(function (Result) {
                console.log(Result);
                result.style.display = "block";


                let hash = Result.hash;

                ShowResult.innerHTML = "You've Successfully Minted . <a href='https://www.etherscan.io/tx/" + hash + "'>Transaction</a>";

                console.log(hash);

            })
            .catch((error) => {
                console.log(error);
                if (error.error) {
                    if (error.error.code === -32603) {
                        alert(error.error.message.slice(20));
                    } else if (error.error.code === -32000) {
                        // alert("Insufficient Funds");
                        console.log(error);

                    } else {
                        console.log("???");
                    }
                } else if (error.code === 4001) {
                    alert("Mint Canceled , Please Try Again");
                }

            });
    } else {
        price = await instance.whitelistCost();
        ETHPaid = price * NFTamount / 10 ** 18;
        console.log(ETHPaid.toString());
        await instance.whitelistMint(NFTamount, proof, { value: ethers.utils.parseUnits(ETHPaid.toString()) })
            .then(function (Result) {
                console.log(Result);
                result.style.display = "block";


                let hash = Result.hash;

                ShowResult.innerHTML = "You've Successfully Minted . <a href='https://www.etherscan.io/tx/" + hash + "'>Transaction</a>";

                console.log(hash);

            })
            .catch((error) => {
                console.log(error);
                if (error.error) {
                    if (error.error.code === -32603) {
                        alert(error.error.message.slice(20));
                    } else if (error.error.code === -32000) {
                        alert("Insufficient Funds");
                    } else {
                        alert("Something Went Wrong");
                    }
                } else if (error.code === 4001) {
                    alert("Mint Canceled , Please Try Again");
                }

            });
    }


}


submit.addEventListener("click", Mint);


connect.addEventListener("click", async function (e) {
    try {
        switchNetwork();



        await provider.send("eth_requestAccounts", []);
        getAccount();

    } catch (e) {
        if (e.code === 4001) {
            alert("Please Connect Your Wallet");

        } else if (e.code === -32002) {

            alert("Please Wait");
        }
    }

});