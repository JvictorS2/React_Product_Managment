import { Grid, HStack, Text } from "../..";

const Htable = ({HeadTable}) => {
    return (
      <Grid bg="secondary.100">
        <HStack justifyContent="space-between">
          {HeadTable.map((item, index) =>
            /* Bloqueia o acesso ao id */
            item.name !== "id" ? (
              <Grid py={3} key={index} flex={item.size}>
                <Text textAlign="center" color="#fff" bold>
                  {item.namePort}
                </Text>
              </Grid>
            ) : (
              ""
            )
          )}
        </HStack>
      </Grid>
    );
}

export default Htable;