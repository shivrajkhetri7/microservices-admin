import React from "react";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Typography from '@mui/material/Typography';
import { SideNav } from "../component/navigation/sideNav";
import LatestTransaction from "../component/dashboard/LatestTrabsaction";
import TopBarNav from "../component/navigation/topNavBar";
import '../view/view.css'
export const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="bgColor">
            <TopBarNav />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* <h1>Dashboard</h1> */}

                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={4} direction="row">                            
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className = "totalEarningGradient">
                                    <CardContent>
                                        <div>
                                            <AccountBalanceIcon sx={{color:"white"}}/>
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                                            Rs. 5000/-
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{color:"white"}}>
                                            Total Earning
                                        </Typography>
                                    </CardContent>

                                </Card>                              
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="totalOrderGradient">
                                    <CardContent>
                                        <div>
                                            <AccountBalanceWalletIcon sx={{color:"white"}}/>
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                                            Rs. 3000/-
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{color:"white"}}>
                                            Total Order
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={2} >
                                <Card sx={{ maxWidth: 345}} className="totalOrderGradient">               
                                    <Stack spacing={2} direction="row" >
                                        <div className="amountIcon">
                                            <SavingsIcon sx={{color:"white"}}/>
                                        </div>
                                        <div className="total-income">
                                            <span className="incomeAmount">Rs 2000/-</span>
                                            <br />
                                            <span className="incomeAmtTitle">Total Income</span>
                                        </div>
                                        </Stack>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Stack spacing={2} direction="row" >
                                        <div className="amountIcon">
                                            <SavingsIcon/>
                                        </div>
                                        <div className="total-income">
                                            <span className="incomeSpend">Rs 2000/-</span>
                                            <br />
                                            <span className="incomeSpendTitle">Total Spends</span>
                                        </div>
                                        </Stack>

                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>

                    <Box height={30} />
                    <LatestTransaction />
                </Box>
            </Box>
            </div> 
           
        </React.Fragment>
    )
}