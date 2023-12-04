// SPDX-License-Identifier: MIT

/*  
    contract by: Carlos Trindade Monteiro powered by (ConvertBlocks)
    smartcontract with Escrow with Token ERC 20

*/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./CryptoTitulo.sol";


contract TreasureEscrow is Ownable {
    using SafeERC20 for IERC20;

    IERC20 public token;
    mapping(address => uint256) public lockedBalances;
    
    event TokensLocked(address indexed payer, uint256 amount);
    event TokensUnlocked(address indexed payee, uint256 amount);

    constructor(address _tokenAddress, address _owner) Ownable(_owner) {
        token = IERC20(address(_tokenAddress));
    }

  function Bloquear(uint256 _amount) external {
    require(_amount > 0, "Amount should be greater than 0");

      token.approve(address(this), _amount);

    
      require(token.allowance(msg.sender, address(this)) >= _amount, "Not enough allowance");

   
    require(CryptoTitulo(address(token)).transferFrom(msg.sender, address(this), _amount), "TransferFrom failed");

    lockedBalances[msg.sender] += _amount;

    emit TokensLocked(msg.sender, _amount);
  }

    
 function approveEscrow(uint256 _amount) external {
        require(_amount > 0, "Amount should be greater than 0");
    
        token.approve(address(this), _amount);
    }


    function Desbloquear(address _payee, uint256 _amount) external onlyOwner {
        require(_amount > 0, "Amount should be greater than 0");
        require(lockedBalances[_payee] >= _amount, "Insufficient locked balance");


        token.safeTransfer(_payee, _amount);
        lockedBalances[_payee] -= _amount;

        emit TokensUnlocked(_payee, _amount);
    }

  function ExecutarOrdemSaque(address _payee, uint256 _amount) external onlyOwner {
    require(_amount > 0, "Amount should be greater than 0");
    require(lockedBalances[_payee] >= _amount, "Insufficient locked balance");

    
    token.safeTransfer(_payee, _amount);

    lockedBalances[_payee] -= _amount;

    emit TokensUnlocked(_payee, _amount);
}

    function getLockedBalance(address _account) external view returns (uint256) {
        return lockedBalances[_account];
    }
}