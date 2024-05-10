import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const PokemonStats = ({ name, value }: { name: string; value: number }) => {
  return (
    <>
      <Box key={name} sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>{name}</Box>
        <Box sx={{ minWidth: 50 }}>{value}</Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={value} color="inherit" />
        </Box>
      </Box>
    </>
  );
};
export default PokemonStats;
