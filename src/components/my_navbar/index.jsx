import { Icon, IconButton } from "native-base";
import { Grid, HStack, Text } from ".."

const NavBar = () => {
    return (
      <Grid height="8vh" bg="primary.50">
        <HStack
          px="4"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <HStack alignItems="center">
            <IconButton
              icon={
                <Icon  name="menu" size="sm" color="white" />
              }
            />
            <Text>
              My App
            </Text>
          </HStack>
          <HStack space="2">
            <IconButton
              icon={
                <Icon
                 
                  name="search"
                  size="sm"
                  color="white"
                />
              }
            />
            <IconButton
              icon={
                <Icon
          
                  name="notifications"
                  size="sm"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>
      </Grid>
    );
};

export default NavBar;