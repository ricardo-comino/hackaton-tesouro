// SPDX-License-Identifier: MIT

/*  
    contract by: Carlos Trindade Monteiro powered by (ConvertBlocks)
    smartcontract with Escrow with Token ERC 20

*/


pragma solidity ^0.8.2;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract CryptoTitulo is ERC20 {
    address public admin;
    constructor() ERC20("CryptoTitulo", "CTL") {
        _mint(msg.sender, 20000000 * 10 ** decimals());
        admin = msg.sender;
    }

    function approveEscrow(address _spender, uint256 _amount) external returns (bool) {
    return approve(_spender, _amount);
}
}

