#!/bin/bash

ACCOUNT=0 truffle exec txtest/gen/deposit.js 

ACCOUNT=0 truffle exec txtest/gen/deposit.js 

ACCOUNT=0 truffle exec txtest/gen/submitOrder.js 

ACCOUNT=0 ID=0 truffle exec txtest/gen/takeOrder.js 

ACCOUNT=0 ID=0 truffle exec txtest/gen/confirmedBySubmitter.js

ACCOUNT=0 ID=0 truffle exec txtest/gen/finalize.js



ACCOUNT=0 truffle exec txtest/burn/deposit.js 

ACCOUNT=0 truffle exec txtest/burn/submitRequest.js 

ACCOUNT=0 ID=0 truffle exec txtest/burn/confirmByProvider.js 

ACCOUNT=0 ID=0 truffle exec txtest/burn/attach.js

ACCOUNT=0 ID=0 truffle exec txtest/gen/mint.js


#ACCOUNT=1 truffle exec node/seller/submitAuction.js 

#ACCOUNT=2 ID=0 AMOUNT=0 truffle exec node/buyer/submitOrder.js 

#ACCOUNT=1 ID=0 truffle exec node/seller/confirmedBySeller.js 

#ACCOUNT=0 ID=0 truffle exec node/witness/confirmedByWitness.js 

#ACCOUNT=1 ID=0 truffle exec node/seller/startAuction.js 

