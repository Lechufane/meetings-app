import React, { useEffect, useState } from 'react';
import { MeetupList } from '../components/meetups/MeetupList';
import { Meetup } from '../interfaces/Meetup.interface';

export const AllMeetupsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Meetup[]>([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://react-example-6e29a-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        const meetups: Meetup[] = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setData(meetups);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={data} />
    </section>
  );
};
