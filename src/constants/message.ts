import { MessageType } from "@/constants/MessageTypes";
import { dateToString } from "@/utils/DateString";

const today = new Date("2024-05-19");
const twoMonthsAgo = new Date(today);
twoMonthsAgo.setMonth(today.getMonth() - 2);

const fourMonthsAgo = new Date(today);
fourMonthsAgo.setMonth(today.getMonth() - 4);

const oneYearAgo = new Date(today);
oneYearAgo.setFullYear(today.getFullYear() - 1);

export const message1: MessageType = {
  id: "1",
  sender: {
    name: "Karthikeyan",
    phone: "123-456-7890",
    email: "test@gmail.com",
  },
  recipient: {
    name: "zeuss trader",
    email: "zeusstrader@gmail.com",
  },
  timestamp: dateToString(oneYearAgo),
  status: "read",
  type: "email",
  body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui hic modi ipsum at pariatur sapiente mollitia quibusdam ad totam illo voluptatibus aperiam veritatis quas sed numquam molestias, amet beatae distinctio dolore eaque? Repellendus, culpa ipsam non eveniet minima sequi inventore in! Sapiente esse natus corporis rerum quos dolorum inventore minima eligendi suscipit, placeat possimus ex molestiae, neque, sequi deleniti molestias architecto? Atque vitae maiores suscipit ad tenetur laudantium labore repellendus, nam at autem dolorum numquam ut praesentium sequi quam id pariatur animi totam nihil vero perferendis? Placeat fugit enim, omnis illo sunt reiciendis aliquam quia magnam repellat, quidem nulla adipisci?",
};
export const message2: MessageType = {
  id: "2",
  sender: {
    name: "Ravichandran R",
    phone: "9934-772-7723",
    email: "ravichandran33@gmail.com",
  },
  recipient: {
    name: "zeuss trader",
    email: "zeusstrader@gmail.com",
  },
  timestamp: dateToString(twoMonthsAgo),
  status: "unread",
  type: "email",
  body: `Dear Karthikeyan J,

  I hope this email finds you well. I am reaching out to inquire about website development services for zeuss trader website with domain name. 
  
  Could you please provide information on your availability, pricing, and the process for getting started? 
  
  Looking forward to hearing from you soon.`,
};
export const message3: MessageType = {
  id: "3",
  sender: {
    name: "Ramesh Chander KS",
    phone: "567-126-0770",
    email: "kschander@gmail.com",
  },
  recipient: {
    name: "zeuss trader",
    email: "zeusstrader@gmail.com",
  },
  timestamp: dateToString(fourMonthsAgo),
  status: "read",
  type: "email",
  body: `Dear Karthikeyan,
  This is a reminder that the project submission deadline is approaching on 12/04/2024. Please ensure you submit your project by the due date. `,
};
export const message4: MessageType = {
  id: "4",
  sender: {
    name: "Jaiganesh P",
    phone: "234-126-7529",
    email: "jg.professor@gmail.com",
  },
  recipient: {
    name: "zeuss trader",
    email: "zeusstrader@gmail.com",
  },
  timestamp: dateToString(fourMonthsAgo),
  status: "unread",
  type: "email",
  body: `Dear Karthikeyan,

I hope this message finds you well. I am writing to remind you of a fundamental responsibility that we all share as citizens: the duty to vote in the upcoming election.

Voting is not just a right but a vital duty that helps shape the future of our community, state, and country. Your vote is your voice, and it is essential that we all participate in the democratic process to ensure our government reflects the will of the people.`,
};

export const message5: MessageType = {
  id: "5",
  sender: {
    name: "Harish E",
    phone: "987-654-3210",
    email: "eharish@example.com",
  },
  recipient: {
    name: "Travel Agency",
    email: "info@travelagency.com",
  },
  timestamp: dateToString(fourMonthsAgo),
  status: "read",
  type: "email",
  body: `Dear Karthikeyan J,

I hope this email finds you well. My name is Alisha Patel, and I'm reaching out to inquire about vacation planning services for an upcoming trip.

I'm looking for some unique and exciting ideas for my vacation. Here are a few random ideas that I'm considering:

1. Exploring ancient ruins in Guna Cave.
2. Embarking on a wildlife safari in forest.
3. Relaxing on a tropical beach getaway in puduchery.
4. Going on a culinary tour to taste local delicacies in thuthukudi.

Could you please provide me with some recommendations and packages that align with these ideas? Additionally, I would appreciate any advice on the best time to visit and must-see attractions in [Destination].

Thank you in advance for your assistance. I look forward to hearing from you soon.

Best regards,
Harish E`,
};

export const messages: MessageType[] = [
  message1,
  message2,
  message3,
  message4,
  message5,
];

export default function getMessages(): Promise<MessageType[]> {
  return new Promise<MessageType[]>((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 3000);
  });
}
