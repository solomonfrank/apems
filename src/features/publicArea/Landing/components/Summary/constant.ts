type contentsProps = {
  subtitle: string;
  title: string;
  description: string;
  position: 'left' | 'right';
};

export const contents: contentsProps[] = [
  {
    subtitle: 'Most interactive event yet',
    title: 'The first all-in-one event platform optimized for connecting',
    description: `Virtual event experience is so much more than just a live video. That’s why you can
    build a full agenda on our platform, where multiple sessions are running
    simultaneously and attendees are interacting with your specified content. Speakers are
    provided with a lot of features, for a smooth and successful experience.`,
    position: 'left',
  },

  {
    subtitle: 'A next-generation virtual event platform',
    title: 'Everything you need in one place',
    description: `              Just like we always delivered at Africaprudential, our platform guarantees a high
    level of engagement. Through features such as ticketing, live Q&As and polls,
    one-on-one & peer chats, the social feed, and quick surveys, everyone at your event
    will be interacting together while you can monitor all of that on your own real-time
    analytics dashboard.`,
    position: 'right',
  },
];
