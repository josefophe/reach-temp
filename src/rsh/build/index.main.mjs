// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '59'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    creator: ctc1,
    metadata: ctc2,
    owner: ctc1,
    price: ctc3,
    royalty: ctc3
    });
  const ctc5 = stdlib.T_Null;
  
  
  const v101 = stdlib.protect(ctc0, interact.id, 'for buyer\'s interact field id');
  const v102 = stdlib.protect(ctc4, interact.nft, 'for buyer\'s interact field nft');
  const v106 = v102.price;
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v37, from: v111 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v102, v101],
    evt_cnt: 2,
    funcNum: 1,
    lct: v113,
    onlyIf: true,
    out_tys: [ctc4, ctc0],
    pay: [v106, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v125, v126], secs: v128, time: v127, didSend: v59, from: v124 } = txn2;
      
      const v129 = v125.price;
      sim_r.txns.push({
        amt: v129,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v133 = v125.royalty;
      const v134 = stdlib.div(v129, v133);
      const v139 = stdlib.sub(v129, v134);
      const v140 = v125.creator;
      sim_r.txns.push({
        amt: v134,
        kind: 'from',
        to: v140,
        tok: undefined /* Nothing */
        });
      const v145 = v125.owner;
      sim_r.txns.push({
        amt: v139,
        kind: 'from',
        to: v145,
        tok: undefined /* Nothing */
        });
      const v151 = v125.metadata;
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v125, v126], secs: v128, time: v127, didSend: v59, from: v124 } = txn2;
  const v129 = v125.price;
  ;
  const v133 = v125.royalty;
  const v134 = stdlib.div(v129, v133);
  const v139 = stdlib.sub(v129, v134);
  const v140 = v125.creator;
  ;
  const v145 = v125.owner;
  ;
  const v151 = v125.metadata;
  const v156 = {
    creator: v140,
    metadata: v151,
    owner: v124,
    price: v129,
    royalty: v133
    };
  stdlib.protect(ctc5, await interact.buyNft(v156, v126), {
    at: './index.rsh:59:29:application',
    fs: ['at ./index.rsh:59:29:application call to [unknown function] (defined at: ./index.rsh:59:29:function exp)', 'at ./index.rsh:59:29:application call to "liftedInteract" (defined at: ./index.rsh:59:29:application)'],
    msg: 'buyNft',
    who: 'buyer'
    });
  
  return;
  
  
  
  
  };
export async function creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '59'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    creator: ctc2,
    metadata: ctc0,
    owner: ctc2,
    price: ctc1,
    royalty: ctc1
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  
  
  const v98 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v99 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v100 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  const v108 = ctc.selfAddress();
  
  const v110 = {
    creator: v108,
    metadata: v98,
    owner: v108,
    price: v99,
    royalty: v100
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v110],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v112], secs: v114, time: v113, didSend: v37, from: v111 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v37, from: v111 } = txn1;
  ;
  stdlib.protect(ctc4, await interact.mintNft(v112), {
    at: './index.rsh:45:32:application',
    fs: ['at ./index.rsh:45:32:application call to [unknown function] (defined at: ./index.rsh:45:32:function exp)', 'at ./index.rsh:45:32:application call to "liftedInteract" (defined at: ./index.rsh:45:32:application)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v125, v126], secs: v128, time: v127, didSend: v59, from: v124 } = txn2;
  const v129 = v125.price;
  ;
  const v133 = v125.royalty;
  const v134 = stdlib.div(v129, v133);
  const v139 = stdlib.sub(v129, v134);
  const v140 = v125.creator;
  ;
  const v145 = v125.owner;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEBIChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAHEjEkQjNAESRDQESSISTDQCEhFESTUFSVcAizX/V4sUNf6ABABW+rM0/1A0/lCwNP+Be1s1/TT9iADBNP00/4GDAVsKNfyxIrIBNPyyCCOyEDT/VwAgsgezsSKyATT9NPwJsggjshA0/1dbILIHs0IAMUgiNAESRDQESSISTDQCEhFESTUFNf+ABBSs+vY0/1CwgaCNBogAYyM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v112",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v112",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v125",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes20",
                    "name": "elem0",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T5",
                "name": "v126",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v125",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes20",
                    "name": "elem0",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T5",
                "name": "v126",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620009dc380380620009dc833981016040819052620000269162000297565b6000805543600355604080513381528251602080830191909152808401515180516001600160a01b039081168486015281830151805160608087019190915293015164ffffffffff19166080808601919091528286015190911660a08501529181015160c0840152015160e082015290517f0909997645124d3efe4aea437280dfc986fa71a8fe9297a33c4a2ed72464d4d9918190036101000190a1620000d03415600762000111565b60016000818155439091556040805160208082018490528251808303820181529183019092528051620001089260029201906200013b565b505050620003b5565b81620001375760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001499062000378565b90600052602060002090601f0160209004810192826200016d5760008555620001b8565b82601f106200018857805160ff1916838001178555620001b8565b82800160010185558215620001b8579182015b82811115620001b85782518255916020019190600101906200019b565b50620001c6929150620001ca565b5090565b5b80821115620001c65760008155600101620001cb565b604080519081016001600160401b03811182821017156200021257634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200021257634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200021257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200029257600080fd5b919050565b600081830360e0811215620002ab57600080fd5b620002b5620001e1565b8351815260c0601f1983011215620002cc57600080fd5b620002d662000218565b620002e062000249565b620002ee602087016200027a565b81526040603f19850112156200030357600080fd5b6200030d620001e1565b935060408601518452606086015164ffffffffff19811681146200033057600080fd5b806020860152508360208201526200034b608087016200027a565b604082015260a0860151606082015260c09095015160808601529384526020810193909352509092915050565b600181811c908216806200038d57607f821691505b60208210811415620003af57634e487b7160e01b600052602260045260246000fd5b50919050565b61061780620003c56000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063ab53f2c614610082578063d3bf3acf146100a557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b34801561008e57600080fd5b506100976100b8565b6040516100649291906103d6565b6100476100b3366004610433565b610155565b6000606060005460028080546100cd9061044c565b80601f01602080910402602001604051908101604052809291908181526020018280546100f99061044c565b80156101465780601f1061011b57610100808354040283529160200191610146565b820191906000526020600020905b81548152906001019060200180831161012957829003601f168201915b50505050509050915091509091565b6101656001600054146009610357565b61017f8135158061017857506001548235145b600a610357565b6000808055600280546101919061044c565b80601f01602080910402602001604051908101604052809291908181526020018280546101bd9061044c565b801561020a5780601f106101df5761010080835404028352916020019161020a565b820191906000526020600020905b8154815290600101906020018083116101ed57829003601f168201915b50505050508060200190518101906102229190610481565b905061023a6040518060200160405280600081525090565b7f8cb88aab25a1d72386752bfb572eba7d0048b7615f32b74e19d88f8e1131c184338460405161026b9291906104eb565b60405180910390a16102843460a0850135146008610357565b61029660c084013560a085013561057f565b81526102a860408401602085016105a1565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156102e1573d6000803e3d6000fd5b506102f260a08401608085016105a1565b81516001600160a01b0391909116906108fc906103139060a08701356105bc565b6040518115909202916000818181858888f1935050505015801561033b573d6000803e3d6000fd5b506000808055600181905561035290600290610380565b505050565b8161037c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b50805461038c9061044c565b6000825580601f1061039c575050565b601f0160209004906000526020600020908101906103ba91906103bd565b50565b5b808211156103d257600081556001016103be565b5090565b82815260006020604081840152835180604085015260005b8181101561040a578581018301518582016060015282016103ee565b8181111561041c576000606083870101525b50601f01601f191692909201606001949350505050565b6000610100828403121561044657600080fd5b50919050565b600181811c9082168061046057607f821691505b6020821081141561044657634e487b7160e01b600052602260045260246000fd5b60006020828403121561049357600080fd5b815180151581146104a357600080fd5b9392505050565b80356001600160a01b03811681146104c157600080fd5b919050565b80356bffffffffffffffffffffffff1981168082146104e457600080fd5b9092525050565b60006101208201905060018060a01b0380851683528335602084015280610514602086016104aa565b16604084015260408401356060840152606084013564ffffffffff19811680821461053e57600080fd5b806080860152505080610553608086016104aa565b1660a08401525060a083013560c083015260c083013560e08301526104a3610100830160e085016104c6565b60008261059c57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156105b357600080fd5b6104a3826104aa565b6000828210156105dc57634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220604bc5d6e6df1b123835368ea5dce8f337d333b1a4255f729beb63b3efc937d264736f6c634300080c0033`,
  BytecodeLen: 2524,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:60:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "buyer": buyer,
  "creator": creator
  };
export const _APIs = {
  };
