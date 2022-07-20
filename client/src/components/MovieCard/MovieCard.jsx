import React from 'react'
import { Card, Image, Text, Button, Group, useMantineTheme, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { movie } = props
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <Grid.Col span={4} style={{ width: 300, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={`/posters/${movie.id}.jpeg`} height={400} width={270} align='center' alt={movie.title} />
        </Card.Section>


        <Text weight={500} align='center'>{movie.title}</Text>


        <Link to={`/movies/${movie.id}`}>
        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          View Details
        </Button>
        </Link>
      </Card>
    </Grid.Col>
  );
}

export default MovieCard
