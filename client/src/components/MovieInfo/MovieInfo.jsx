import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Badge,
  Grid,
  Center,
} from "@mantine/core";

const MovieInfo = (props) => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      let fetch = await axios.get(`http://localhost:1337/api/movies/${id}`);

      setMovie(fetch.data);
    };

    fetchMovie();
  }, []);

  if (!movie.id) {
    return <div>Loading Movie...</div>;
  }

  return (
    <Grid style={{ paddingTop: "25px", width: "100%" }} justify="center">
      <Grid.Col span={6}>
        <Image
          src={`/posters/${movie.id}.jpeg`}
          height={600}
          width={405}
          align="center"
          alt={movie.title}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Center>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <h1>{movie.title}</h1>
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5 }}>
              <Badge color="grey" variant="light">
                Phase {movie.phase}
              </Badge>
              <Badge color="grey" variant="light">
                Chronological Order: {movie.chronologicalOrder}
              </Badge>
            </Group>

            <Text weight={500} align="center"></Text>
            <Text weight={500} align="center">
              Release Date: {movie.releaseDate}
            </Text>

            <Text size="sm" align="center">
              Heroes:{" "}
              {movie.heroes.map((hero) => (
                <div>{hero.heroAlias}</div>
              ))}
            </Text>
            <Text size="sm" align="center">
              Villains:{" "}
              {movie.villains.map((villain) => (
                <div>{villain.villainAlias}</div>
              ))}
            </Text>

            <Link to={"/"}>
              <Button
                variant="light"
                color="blue"
                fullWidth
                style={{ marginTop: 14 }}
              >
                Back to Movies
              </Button>
            </Link>
          </Card>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default MovieInfo;
