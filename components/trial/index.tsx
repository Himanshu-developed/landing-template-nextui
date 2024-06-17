import {Button, Divider, Link, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Promotions = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Limited Time Offer: Get a Free Growth Strategy Session!</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
Our sales team will analyze your business, identify opportunities, and craft a personalized roadmap to success. 
            </Text>
            <Link href="https://ydtfie02mut.typeform.com/to/WOF3Xwdx">
            <Button>Contact To Sales</Button>
            </Link>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
