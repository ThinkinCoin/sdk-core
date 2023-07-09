import JSBI from 'jsbi';
import invariant from 'tiny-invariant';
import _Decimal from 'decimal.js-light';
import _Big from 'big.js';
import toFormat from 'toformat';
import { getAddress } from '@ethersproject/address';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
<<<<<<< HEAD
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
=======
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

>>>>>>> refs/remotes/origin/main
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
<<<<<<< HEAD
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var ChainId;
=======

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var ChainId;

>>>>>>> refs/remotes/origin/main
(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
  ChainId[ChainId["GOERLI"] = 5] = "GOERLI";
  ChainId[ChainId["SEPOLIA"] = 11155111] = "SEPOLIA";
  ChainId[ChainId["OPTIMISM"] = 10] = "OPTIMISM";
  ChainId[ChainId["OPTIMISM_GOERLI"] = 420] = "OPTIMISM_GOERLI";
  ChainId[ChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
  ChainId[ChainId["ARBITRUM_GOERLI"] = 421613] = "ARBITRUM_GOERLI";
  ChainId[ChainId["POLYGON"] = 137] = "POLYGON";
  ChainId[ChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
  ChainId[ChainId["CELO"] = 42220] = "CELO";
  ChainId[ChainId["CELO_ALFAJORES"] = 44787] = "CELO_ALFAJORES";
  ChainId[ChainId["GNOSIS"] = 100] = "GNOSIS";
  ChainId[ChainId["MOONBEAM"] = 1284] = "MOONBEAM";
  ChainId[ChainId["BNB"] = 56] = "BNB";
  ChainId[ChainId["HARMONY"] = 1666600000] = "HARMONY";
})(ChainId || (ChainId = {}));
<<<<<<< HEAD
var SUPPORTED_CHAINS = [ChainId.MAINNET, ChainId.OPTIMISM, ChainId.OPTIMISM_GOERLI, ChainId.ARBITRUM_ONE, ChainId.ARBITRUM_GOERLI, ChainId.POLYGON, ChainId.POLYGON_MUMBAI, ChainId.GOERLI, ChainId.SEPOLIA, ChainId.CELO_ALFAJORES, ChainId.CELO, ChainId.BNB, ChainId.HARMONY];
var NativeCurrencyName;
=======

var SUPPORTED_CHAINS = [ChainId.MAINNET, ChainId.OPTIMISM, ChainId.OPTIMISM_GOERLI, ChainId.ARBITRUM_ONE, ChainId.ARBITRUM_GOERLI, ChainId.POLYGON, ChainId.POLYGON_MUMBAI, ChainId.GOERLI, ChainId.SEPOLIA, ChainId.CELO_ALFAJORES, ChainId.CELO, ChainId.BNB, ChainId.HARMONY];
var NativeCurrencyName;

>>>>>>> refs/remotes/origin/main
(function (NativeCurrencyName) {
  // Strings match input for CLI
  NativeCurrencyName["ETHER"] = "ETH";
  NativeCurrencyName["MATIC"] = "MATIC";
  NativeCurrencyName["CELO"] = "CELO";
  NativeCurrencyName["GNOSIS"] = "XDAI";
  NativeCurrencyName["MOONBEAM"] = "GLMR";
  NativeCurrencyName["BNB"] = "BNB";
<<<<<<< HEAD
  NativeCurrencyName["HARMONY"] = "ONE";
=======
  NativeCurrencyName["AVAX"] = "AVAX";
>>>>>>> refs/remotes/origin/main
})(NativeCurrencyName || (NativeCurrencyName = {}));

var _CHAIN_TO_ADDRESSES_M, _GOVERNANCE_ALPHA_V1_, _GOVERNANCE_BRAVO_ADD, _MERKLE_DISTRIBUTOR_A, _ARGENT_WALLET_DETECT, _SOCKS_CONTROLLER_ADD;
var DEFAULT_NETWORKS = [ChainId.MAINNET, ChainId.GOERLI];
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
function constructSameAddressMap(address, additionalNetworks) {
  if (additionalNetworks === void 0) {
    additionalNetworks = [];
  }
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce(function (memo, chainId) {
    memo[chainId] = address;
    return memo;
  }, {});
}
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
var UNI_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [ChainId.OPTIMISM, ChainId.ARBITRUM_ONE, ChainId.POLYGON, ChainId.POLYGON_MUMBAI, ChainId.SEPOLIA]);
var UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78';
var V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
var V2_FACTORY_ADDRESSES = /*#__PURE__*/constructSameAddressMap(V2_FACTORY_ADDRESS);
var V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
<<<<<<< HEAD
var V2_ROUTER_ADDRESSES = /*#__PURE__*/constructSameAddressMap(V2_ROUTER_ADDRESS);
// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
=======
var V2_ROUTER_ADDRESSES = /*#__PURE__*/constructSameAddressMap(V2_ROUTER_ADDRESS); // Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon

>>>>>>> refs/remotes/origin/main
var DEFAULT_ADDRESSES = {
  v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984',
  quoterAddress: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  nonfungiblePositionManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
};
<<<<<<< HEAD
var MAINNET_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
});
var GOERLI_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0xBa60b6e6fF25488308789E6e0A65D838be34194e'
});
var OPTIMISM_ADDRESSES = DEFAULT_ADDRESSES;
=======

var MAINNET_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
});

var GOERLI_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0xBa60b6e6fF25488308789E6e0A65D838be34194e'
});

var OPTIMISM_ADDRESSES = DEFAULT_ADDRESSES;

>>>>>>> refs/remotes/origin/main
var ARBITRUM_ONE_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  multicallAddress: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  tickLensAddress: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573'
});
<<<<<<< HEAD
var POLYGON_ADDRESSES = DEFAULT_ADDRESSES;
// celo v3 addresses
=======

var POLYGON_ADDRESSES = DEFAULT_ADDRESSES; // celo v3 addresses

>>>>>>> refs/remotes/origin/main
var CELO_ADDRESSES = {
  v3CoreFactoryAddress: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
  multicallAddress: '0x633987602DE5C4F337e3DbF265303A1080324204',
  quoterAddress: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8',
  v3MigratorAddress: '0x3cFd4d48EDfDCC53D3f173F596f621064614C582',
  nonfungiblePositionManagerAddress: '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
  tickLensAddress: '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D'
<<<<<<< HEAD
};
// BNB v3 addresses
=======
}; // BNB v3 addresses

>>>>>>> refs/remotes/origin/main
var BNB_ADDRESSES = {
  v3CoreFactoryAddress: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
  multicallAddress: '0x963Df249eD09c358A4819E39d9Cd5736c3087184',
  quoterAddress: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
  v3MigratorAddress: '0x32681814957e0C13117ddc0c2aba232b5c9e760f',
  nonfungiblePositionManagerAddress: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
  tickLensAddress: '0xD9270014D396281579760619CCf4c3af0501A47C',
  swapRouter02Address: '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2'
<<<<<<< HEAD
};
// optimism goerli addresses
=======
}; // optimism goerli addresses

>>>>>>> refs/remotes/origin/main
var OPTIMISM_GOERLI_ADDRESSES = {
  v3CoreFactoryAddress: '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10',
  multicallAddress: '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd',
  quoterAddress: '0x9569CbA925c8ca2248772A9A4976A516743A246F',
  v3MigratorAddress: '0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8',
  nonfungiblePositionManagerAddress: '0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6',
  tickLensAddress: '0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e'
<<<<<<< HEAD
};
// arbitrum goerli v3 addresses
=======
}; // arbitrum goerli v3 addresses

>>>>>>> refs/remotes/origin/main
var ARBITRUM_GOERLI_ADDRESSES = {
  v3CoreFactoryAddress: '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6',
  multicallAddress: '0x8260CB40247290317a4c062F3542622367F206Ee',
  quoterAddress: '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA',
  v3MigratorAddress: '0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3',
  nonfungiblePositionManagerAddress: '0x622e4726a167799826d1E1D150b076A7725f5D81',
  tickLensAddress: '0xb52429333da969a0C79a60930a4Bf0020E5D1DE8'
<<<<<<< HEAD
};
// sepolia v3 addresses
=======
}; // sepolia v3 addresses

>>>>>>> refs/remotes/origin/main
var SEPOLIA_ADDRESSES = {
  v3CoreFactoryAddress: '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
  multicallAddress: '0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07',
  quoterAddress: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
  v3MigratorAddress: '0x729004182cF005CEC8Bd85df140094b6aCbe8b15',
  nonfungiblePositionManagerAddress: '0x1238536071E1c677A632429e3655c799b22cDA52',
  tickLensAddress: '0xd7f33bcdb21b359c8ee6f0251d30e94832baad07'
<<<<<<< HEAD
};
// HARMONY v3 addresses
=======
}; // HARMONY v3 addresses

>>>>>>> refs/remotes/origin/main
var HARMONY_ADDRESSES = {
  v3CoreFactoryAddress: '0x73e20b9dD9577ad6A5acafb27d1FB88D9d7d31d5',
  multicallAddress: '0xdb5849ea2d14ec82f13d1cb7f08a9ca43c2c6754',
  quoterAddress: '0x76376774BD25fE7bd4c5d12218A0ED3105E018d9',
  v3MigratorAddress: '0x01777581f63daa788fdb8a86a1b1cecd04461d46',
  nonfungiblePositionManagerAddress: '0x8f406502534d16BC40cea2AAd95915516b25Cc2E',
  tickLensAddress: '0xE37083979fc1Aba5309a9e9E6FAeEba9f34111A5',
  swapRouter02Address: '0x3A49a917c501eCcA3C1A256959BF8557DdF40514'
};
var CHAIN_TO_ADDRESSES_MAP = (_CHAIN_TO_ADDRESSES_M = {}, _CHAIN_TO_ADDRESSES_M[ChainId.MAINNET] = MAINNET_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.OPTIMISM] = OPTIMISM_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.ARBITRUM_ONE] = ARBITRUM_ONE_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.POLYGON] = POLYGON_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.POLYGON_MUMBAI] = POLYGON_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.GOERLI] = GOERLI_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.CELO] = CELO_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.CELO_ALFAJORES] = CELO_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.BNB] = BNB_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.OPTIMISM_GOERLI] = OPTIMISM_GOERLI_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.ARBITRUM_GOERLI] = ARBITRUM_GOERLI_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.SEPOLIA] = SEPOLIA_ADDRESSES, _CHAIN_TO_ADDRESSES_M[ChainId.HARMONY] = HARMONY_ADDRESSES, _CHAIN_TO_ADDRESSES_M);
/* V3 Contract Addresses */
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
var V3_CORE_FACTORY_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress;
  return memo;
}, {}));
var V3_MIGRATOR_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress;
<<<<<<< HEAD
  if (v3MigratorAddress) {
    memo[chainId] = v3MigratorAddress;
  }
=======

  if (v3MigratorAddress) {
    memo[chainId] = v3MigratorAddress;
  }

>>>>>>> refs/remotes/origin/main
  return memo;
}, {}));
var MULTICALL_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress;
  return memo;
}, {}));
<<<<<<< HEAD
/**
 * The oldest V0 governance address
 */
var GOVERNANCE_ALPHA_V0_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F');
/**
 * The older V1 governance address
 */
var GOVERNANCE_ALPHA_V1_ADDRESSES = (_GOVERNANCE_ALPHA_V1_ = {}, _GOVERNANCE_ALPHA_V1_[ChainId.MAINNET] = '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6', _GOVERNANCE_ALPHA_V1_);
/**
 * The latest governor bravo that is currently admin of timelock
 */
=======
/**
 * The oldest V0 governance address
 */

var GOVERNANCE_ALPHA_V0_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F');
/**
 * The older V1 governance address
 */

var GOVERNANCE_ALPHA_V1_ADDRESSES = (_GOVERNANCE_ALPHA_V1_ = {}, _GOVERNANCE_ALPHA_V1_[ChainId.MAINNET] = '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6', _GOVERNANCE_ALPHA_V1_);
/**
 * The latest governor bravo that is currently admin of timelock
 */

>>>>>>> refs/remotes/origin/main
var GOVERNANCE_BRAVO_ADDRESSES = (_GOVERNANCE_BRAVO_ADD = {}, _GOVERNANCE_BRAVO_ADD[ChainId.MAINNET] = '0x408ED6354d4973f66138C91495F2f2FCbd8724C3', _GOVERNANCE_BRAVO_ADD);
var TIMELOCK_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC');
var MERKLE_DISTRIBUTOR_ADDRESS = (_MERKLE_DISTRIBUTOR_A = {}, _MERKLE_DISTRIBUTOR_A[ChainId.MAINNET] = '0x090D4613473dEE047c3f2706764f49E0821D256e', _MERKLE_DISTRIBUTOR_A);
var ARGENT_WALLET_DETECTOR_ADDRESS = (_ARGENT_WALLET_DETECT = {}, _ARGENT_WALLET_DETECT[ChainId.MAINNET] = '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8', _ARGENT_WALLET_DETECT);
var QUOTER_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress;
  return memo;
}, {}));
var NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress;
<<<<<<< HEAD
  if (nonfungiblePositionManagerAddress) {
    memo[chainId] = nonfungiblePositionManagerAddress;
  }
=======

  if (nonfungiblePositionManagerAddress) {
    memo[chainId] = nonfungiblePositionManagerAddress;
  }

>>>>>>> refs/remotes/origin/main
  return memo;
}, {}));
var ENS_REGISTRAR_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'));
var SOCKS_CONTROLLER_ADDRESSES = (_SOCKS_CONTROLLER_ADD = {}, _SOCKS_CONTROLLER_ADD[ChainId.MAINNET] = '0x65770b5283117639760beA3F867b69b3697a91dd', _SOCKS_CONTROLLER_ADD);
var TICK_LENS_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress;
<<<<<<< HEAD
  if (tickLensAddress) {
    memo[chainId] = tickLensAddress;
  }
=======

  if (tickLensAddress) {
    memo[chainId] = tickLensAddress;
  }

>>>>>>> refs/remotes/origin/main
  return memo;
}, {}));
var MIXED_ROUTE_QUOTER_V1_ADDRESSES = /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress;
<<<<<<< HEAD
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress;
  }
=======

  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress;
  }

>>>>>>> refs/remotes/origin/main
  return memo;
}, {});
var SWAP_ROUTER_02_ADDRESSES = function SWAP_ROUTER_02_ADDRESSES(chainId) {
  if (chainId == ChainId.BNB) {
    return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address;
  }
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};

var TradeType;
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));
<<<<<<< HEAD
var Rounding;
=======

var Rounding;

>>>>>>> refs/remotes/origin/main
(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
var MaxUint256 = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = JSBI.BigInt(1);
    }
<<<<<<< HEAD
    this.numerator = JSBI.BigInt(numerator);
    this.denominator = JSBI.BigInt(denominator);
  }
=======

    this.numerator = JSBI.BigInt(numerator);
    this.denominator = JSBI.BigInt(denominator);
  }

>>>>>>> refs/remotes/origin/main
  Fraction.tryParseFraction = function tryParseFraction(fractionish) {
    if (fractionish instanceof JSBI || typeof fractionish === 'number' || typeof fractionish === 'string') return new Fraction(fractionish);
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish;
    throw new Error('Could not parse fraction');
<<<<<<< HEAD
  }
  // performs floor division
  ;
  var _proto = Fraction.prototype;
  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };
  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };
  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };
=======
  } // performs floor division
  ;

  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

>>>>>>> refs/remotes/origin/main
  _proto.lessThan = function lessThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  _proto.equalTo = function equalTo(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  _proto.multiply = function multiply(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  _proto.divide = function divide(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }
<<<<<<< HEAD
    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }
=======

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

>>>>>>> refs/remotes/origin/main
    !Number.isInteger(significantDigits) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not an integer.") : invariant(false) : void 0;
    !(significantDigits > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not positive.") : invariant(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }
<<<<<<< HEAD
    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }
=======

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

>>>>>>> refs/remotes/origin/main
    !Number.isInteger(decimalPlaces) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is not an integer.") : invariant(false) : void 0;
    !(decimalPlaces >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is negative.") : invariant(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
<<<<<<< HEAD
  /**
   * Helper method for converting any super class back to a fraction
   */;
=======
  /**
   * Helper method for converting any super class back to a fraction
   */
  ;

>>>>>>> refs/remotes/origin/main
  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
<<<<<<< HEAD
    }
    // remainder after floor division
=======
    } // remainder after floor division

>>>>>>> refs/remotes/origin/main
  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }, {
    key: "asFraction",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }]);
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);
<<<<<<< HEAD
  function CurrencyAmount(currency, numerator, denominator) {
    var _this;
=======

  function CurrencyAmount(currency, numerator, denominator) {
    var _this;

>>>>>>> refs/remotes/origin/main
    _this = _Fraction.call(this, numerator, denominator) || this;
    !JSBI.lessThanOrEqual(_this.quotient, MaxUint256) ? process.env.NODE_ENV !== "production" ? invariant(false, 'AMOUNT') : invariant(false) : void 0;
    _this.currency = currency;
    _this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals));
    return _this;
  }
<<<<<<< HEAD
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */;
  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  };
  var _proto = CurrencyAmount.prototype;
  _proto.add = function add(other) {
    !this.currency.equals(other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) : void 0;
    var added = _Fraction.prototype.add.call(this, other);
    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  };
  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) : void 0;
    var subtracted = _Fraction.prototype.subtract.call(this, other);
    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  };
  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other);
    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  };
  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other);
    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  };
=======
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */


  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  ;

  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !this.currency.equals(other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) : void 0;

    var added = _Fraction.prototype.add.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  };

  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) : void 0;

    var subtracted = _Fraction.prototype.subtract.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  };

  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  };

  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  };

>>>>>>> refs/remotes/origin/main
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }
<<<<<<< HEAD
    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }
    return _Fraction.prototype.divide.call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
  };
=======

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.divide.call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
  };

>>>>>>> refs/remotes/origin/main
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }
<<<<<<< HEAD
    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }
    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.divide.call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
  };
=======

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.divide.call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
  };

>>>>>>> refs/remotes/origin/main
  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }
<<<<<<< HEAD
    Big$1.DP = this.currency.decimals;
    return new Big$1(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  };
=======

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  };

>>>>>>> refs/remotes/origin/main
  _createClass(CurrencyAmount, [{
    key: "wrapped",
    get: function get() {
      if (this.currency.isToken) return this;
      return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
    }
  }]);
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return CurrencyAmount;
}(Fraction);

var ONE_HUNDRED = /*#__PURE__*/new Fraction( /*#__PURE__*/JSBI.BigInt(100));
<<<<<<< HEAD
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */
function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}
var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);
  function Percent() {
    var _this;
    _this = _Fraction.apply(this, arguments) || this;
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */
    _this.isPercent = true;
    return _this;
  }
  var _proto = Percent.prototype;
  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other));
  };
  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other));
  };
  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other));
  };
  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other));
  };
=======
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */

function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    var _this;

    _this = _Fraction.apply(this, arguments) || this;
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */

    _this.isPercent = true;
    return _this;
  }

  var _proto = Percent.prototype;

  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other));
  };

  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other));
  };

  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other));
  };

  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other));
  };

>>>>>>> refs/remotes/origin/main
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }
<<<<<<< HEAD
    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  };
=======

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  };

>>>>>>> refs/remotes/origin/main
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }
<<<<<<< HEAD
    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  };
=======

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  };

>>>>>>> refs/remotes/origin/main
  return Percent;
}(Fraction);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);
<<<<<<< HEAD
  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this;
    var baseCurrency, quoteCurrency, denominator, numerator;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
=======

  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this;

    var baseCurrency, quoteCurrency, denominator, numerator;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

>>>>>>> refs/remotes/origin/main
    if (args.length === 4) {
      baseCurrency = args[0];
      quoteCurrency = args[1];
      denominator = args[2];
      numerator = args[3];
    } else {
      var result = args[0].quoteAmount.divide(args[0].baseAmount);
      var _ref = [args[0].baseAmount.currency, args[0].quoteAmount.currency, result.denominator, result.numerator];
      baseCurrency = _ref[0];
      quoteCurrency = _ref[1];
      denominator = _ref[2];
      numerator = _ref[3];
    }
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }
<<<<<<< HEAD
  /**
   * Flip the price, switching the base and quote currency
   */
  var _proto = Price.prototype;
  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */;
  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var fraction = _Fraction.prototype.multiply.call(this, other);
    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */;
  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var result = _Fraction.prototype.multiply.call(this, currencyAmount);
    return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */;
=======
  /**
   * Flip the price, switching the base and quote currency
   */


  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
  ;

  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var result = _Fraction.prototype.multiply.call(this, currencyAmount);

    return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  ;

>>>>>>> refs/remotes/origin/main
  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }
<<<<<<< HEAD
    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  };
=======

    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  };

>>>>>>> refs/remotes/origin/main
  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }
<<<<<<< HEAD
    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  };
=======

    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  };

>>>>>>> refs/remotes/origin/main
  _createClass(Price, [{
    key: "adjustedForDecimals",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);
<<<<<<< HEAD
  return Price;
}(Fraction);

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
var BaseCurrency =
/**
 * Constructs an instance of the base class `BaseCurrency`.
 * @param chainId the chain ID on which this currency resides
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
=======

  return Price;
}(Fraction);

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

var BaseCurrency =
/**
 * Constructs an instance of the base class `BaseCurrency`.
 * @param chainId the chain ID on which this currency resides
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
>>>>>>> refs/remotes/origin/main
 */
function BaseCurrency(chainId, decimals, symbol, name) {
  !Number.isSafeInteger(chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
  !(decimals >= 0 && decimals < 255 && Number.isInteger(decimals)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
  this.chainId = chainId;
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};

<<<<<<< HEAD
/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
var NativeCurrency = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(NativeCurrency, _BaseCurrency);
  function NativeCurrency() {
    var _this;
=======
/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

var NativeCurrency = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(NativeCurrency, _BaseCurrency);

  function NativeCurrency() {
    var _this;

>>>>>>> refs/remotes/origin/main
    _this = _BaseCurrency.apply(this, arguments) || this;
    _this.isNative = true;
    _this.isToken = false;
    return _this;
  }
<<<<<<< HEAD
  return NativeCurrency;
}(BaseCurrency);

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
=======

  return NativeCurrency;
}(BaseCurrency);

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */

>>>>>>> refs/remotes/origin/main
function validateAndParseAddress(address) {
  try {
    return getAddress(address);
  } catch (error) {
    throw new Error(address + " is not a valid address.");
  }
<<<<<<< HEAD
}
// Checks a string starts with 0x, is 42 characters long and contains only hex characters after 0x
var startsWith0xLen42HexRegex = /^0x[0-9a-fA-F]{40}$/;
/**
 * Checks if an address is valid by checking 0x prefix, length === 42 and hex encoding.
 * @param address the unchecksummed hex address
 */
=======
} // Checks a string starts with 0x, is 42 characters long and contains only hex characters after 0x

var startsWith0xLen42HexRegex = /^0x[0-9a-fA-F]{40}$/;
/**
 * Checks if an address is valid by checking 0x prefix, length === 42 and hex encoding.
 * @param address the unchecksummed hex address
 */

>>>>>>> refs/remotes/origin/main
function checkValidAddress(address) {
  if (startsWith0xLen42HexRegex.test(address)) {
    return address;
  }
<<<<<<< HEAD
  throw new Error(address + " is not a valid address.");
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
var Token = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(Token, _BaseCurrency);
  /**
   *
   * @param chainId {@link BaseCurrency#chainId}
   * @param address The contract address on the chain on which this token lives
   * @param decimals {@link BaseCurrency#decimals}
   * @param symbol {@link BaseCurrency#symbol}
   * @param name {@link BaseCurrency#name}
   * @param bypassChecksum If true it only checks for length === 42, startsWith 0x and contains only hex characters
   */
  function Token(chainId, address, decimals, symbol, name, bypassChecksum) {
    var _this;
    _this = _BaseCurrency.call(this, chainId, decimals, symbol, name) || this;
    _this.isNative = false;
    _this.isToken = true;
=======

  throw new Error(address + " is not a valid address.");
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(Token, _BaseCurrency);

  /**
   *
   * @param chainId {@link BaseCurrency#chainId}
   * @param address The contract address on the chain on which this token lives
   * @param decimals {@link BaseCurrency#decimals}
   * @param symbol {@link BaseCurrency#symbol}
   * @param name {@link BaseCurrency#name}
   * @param bypassChecksum If true it only checks for length === 42, startsWith 0x and contains only hex characters
   */
  function Token(chainId, address, decimals, symbol, name, bypassChecksum) {
    var _this;

    _this = _BaseCurrency.call(this, chainId, decimals, symbol, name) || this;
    _this.isNative = false;
    _this.isToken = true;

>>>>>>> refs/remotes/origin/main
    if (bypassChecksum) {
      _this.address = checkValidAddress(address);
    } else {
      _this.address = validateAndParseAddress(address);
    }
<<<<<<< HEAD
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  var _proto = Token.prototype;
  _proto.equals = function equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address.toLowerCase() === other.address.toLowerCase();
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */;
=======

    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address.toLowerCase() === other.address.toLowerCase();
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

>>>>>>> refs/remotes/origin/main
  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(this.address.toLowerCase() !== other.address.toLowerCase()) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ADDRESSES') : invariant(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
<<<<<<< HEAD
  /**
   * Return this token, which does not need to be wrapped
   */;
=======
  /**
   * Return this token, which does not need to be wrapped
   */
  ;

>>>>>>> refs/remotes/origin/main
  _createClass(Token, [{
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return Token;
}(BaseCurrency);

var _WETH;
<<<<<<< HEAD
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
var WETH9 = (_WETH = {}, _WETH[1] = /*#__PURE__*/new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'), _WETH[3] = /*#__PURE__*/new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[4] = /*#__PURE__*/new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[5] = /*#__PURE__*/new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'), _WETH[42] = /*#__PURE__*/new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'), _WETH[10] = /*#__PURE__*/new Token(10, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), _WETH[69] = /*#__PURE__*/new Token(69, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), _WETH[42161] = /*#__PURE__*/new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'), _WETH[421611] = /*#__PURE__*/new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'), _WETH[1666600000] = /*#__PURE__*/new Token(1666600000, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WETH', 'Wrapped Ether'), _WETH);

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
var Ether = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency);
  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ETH', 'Ether') || this;
  }
  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;
    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  };
  var _proto = Ether.prototype;
  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };
=======
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */

var WETH9 = (_WETH = {}, _WETH[1] = /*#__PURE__*/new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'), _WETH[3] = /*#__PURE__*/new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[4] = /*#__PURE__*/new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[5] = /*#__PURE__*/new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'), _WETH[42] = /*#__PURE__*/new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'), _WETH[10] = /*#__PURE__*/new Token(10, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), _WETH[69] = /*#__PURE__*/new Token(69, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'), _WETH[42161] = /*#__PURE__*/new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'), _WETH[421611] = /*#__PURE__*/new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'), _WETH);

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */

var Ether = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency);

  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ETH', 'Ether') || this;
  }

  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;

    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  };

  var _proto = Ether.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

>>>>>>> refs/remotes/origin/main
  _createClass(Ether, [{
    key: "wrapped",
    get: function get() {
      var weth9 = WETH9[this.chainId];
      !!!weth9 ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return weth9;
    }
  }]);
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return Ether;
}(NativeCurrency);
Ether._etherCache = {};

<<<<<<< HEAD
/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */
function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount);
  // calculate price impact := (exactQuote - outputAmount) / exactQuote
=======
/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount); // calculate price impact := (exactQuote - outputAmount) / exactQuote

>>>>>>> refs/remotes/origin/main
  var priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount);
  return new Percent(priceImpact.numerator, priceImpact.denominator);
}

<<<<<<< HEAD
// given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item
function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0;
  // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize
  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0;
  // short circuit first item add
=======
// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0; // short circuit first item add

>>>>>>> refs/remotes/origin/main
  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
<<<<<<< HEAD
    var isFull = items.length === maxSize;
    // short circuit if full and the additional item does not come before the last item
    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }
    var lo = 0,
      hi = items.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
=======
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

>>>>>>> refs/remotes/origin/main
      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

var MAX_SAFE_INTEGER = /*#__PURE__*/JSBI.BigInt(Number.MAX_SAFE_INTEGER);
var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
<<<<<<< HEAD
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */
function sqrt(value) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'NEGATIVE') : invariant(false) : void 0;
  // rely on built in sqrt if possible
  if (JSBI.lessThan(value, MAX_SAFE_INTEGER)) {
    return JSBI.BigInt(Math.floor(Math.sqrt(JSBI.toNumber(value))));
  }
=======
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */

function sqrt(value) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'NEGATIVE') : invariant(false) : void 0; // rely on built in sqrt if possible

  if (JSBI.lessThan(value, MAX_SAFE_INTEGER)) {
    return JSBI.BigInt(Math.floor(Math.sqrt(JSBI.toNumber(value))));
  }

>>>>>>> refs/remotes/origin/main
  var z;
  var x;
  z = value;
  x = JSBI.add(JSBI.divide(value, TWO), ONE);
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  while (JSBI.lessThan(x, z)) {
    z = x;
    x = JSBI.divide(JSBI.add(JSBI.divide(value, x), x), TWO);
  }
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  return z;
}

export { ARGENT_WALLET_DETECTOR_ADDRESS, CHAIN_TO_ADDRESSES_MAP, ChainId, CurrencyAmount, ENS_REGISTRAR_ADDRESSES, Ether, Fraction, GOVERNANCE_ALPHA_V0_ADDRESSES, GOVERNANCE_ALPHA_V1_ADDRESSES, GOVERNANCE_BRAVO_ADDRESSES, MERKLE_DISTRIBUTOR_ADDRESS, MIXED_ROUTE_QUOTER_V1_ADDRESSES, MULTICALL_ADDRESSES, MaxUint256, NONFUNGIBLE_POSITION_MANAGER_ADDRESSES, NativeCurrency, NativeCurrencyName, Percent, Price, QUOTER_ADDRESSES, Rounding, SOCKS_CONTROLLER_ADDRESSES, SUPPORTED_CHAINS, SWAP_ROUTER_02_ADDRESSES, TICK_LENS_ADDRESSES, TIMELOCK_ADDRESSES, Token, TradeType, UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS, UNI_ADDRESSES, V2_FACTORY_ADDRESS, V2_FACTORY_ADDRESSES, V2_ROUTER_ADDRESS, V2_ROUTER_ADDRESSES, V3_CORE_FACTORY_ADDRESSES, V3_MIGRATOR_ADDRESSES, WETH9, computePriceImpact, sortedInsert, sqrt, validateAndParseAddress };
//# sourceMappingURL=sdk-core.esm.js.map
