import { Box, Wrapper } from './ShoppingCartPage.sryled';
import UserData from '../../components/UserData/UserData';
import OrderList from '../../components/OrderList/OrderList'
import Footer from '../../components/Footer/Footer';


function ShoppingCartPage() {
    return (
        <>
            <Box>
                <OrderList />
                <Wrapper>
                    <UserData />
                </Wrapper>
            </Box>   
            <Footer/>
        </>

    )
};

export default ShoppingCartPage;