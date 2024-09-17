import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import logo from '../../assets/logo.png';
import bgScroll from '../../assets/plans_bg.jpg';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './Plan.css';

const Plan = () => {
    return (
        <>

            <div className="plans h-full p-20 pb-15 flex gap-1 relative" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1.0)), url(${bgScroll})`, animation: 'moveBackground 20s linear infinite' }} >
                
                <div className="">

                    <div className="flex items-center gap-8">
                        <Link to={'/home'}>
                            <IconButton
                                className="white-icon"
                                aria-label="CloseIcon"
                                icon={<CloseIcon boxSize={5} strokeWidth="0.5" />}
                                variant="ghost"
                                colorScheme="whiteAlpha"
                            />
                        </Link>
                        <img className="w-32" src={logo} alt="logo" />
                    </div>

                    <h3 className="w-9/12 my-9 text-4xl text-slate-300 font-semibold leading-relaxed">
                        Upgrade to get more out of your Nuflix subscription
                    </h3>

                </div>

                <div className="plans__table w-full z-10 bg-black">

                    <Table variant="unstyled" size="lg">
                        <Thead>
                            <Tr>
                                <Th width="40%"></Th>
                                <Th>Spotlight Plan</Th>
                                <Th style={{ color: '#e09016' }}>Blockbuster Plan</Th>
                                <Th className="text-sky-400">Cinematic Plan</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td fontWeight="bold">Resolution</Td>
                                <Td>SD (480p)</Td>
                                <Td>HD (1080p)</Td>
                                <Td>4K/UHD (2160p)</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight="bold">Screens</Td>
                                <Td>1 Screen</Td>
                                <Td>2 Screens</Td>
                                <Td>4 Screens</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight="bold">Offline Downloads</Td>
                                <Td>Limited</Td>
                                <Td>Available (HD)</Td>
                                <Td>Available (4K/UHD)</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight="bold">Advertisements</Td>
                                <Td>Yes</Td>
                                <Td>No</Td>
                                <Td>No</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Plan;
