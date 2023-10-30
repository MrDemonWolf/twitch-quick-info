type Props = {
  message: string;
};

export default function Hero(props: Props) {
  return (
    <div className="m-10 mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-700">
      <div className="flex items-center bg-gray-100 px-6 py-3 dark:bg-gray-600">
        <h1 className="text-primary-500 text-2xl font-semibold dark:text-white">
          {props.message}
        </h1>
      </div>
    </div>
  );
}
