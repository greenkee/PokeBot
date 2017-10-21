import zerorpc

class HelloRPC(object):
    def __init__(self):
        self.counter = 0

    def hello(self, name):
        return "Hello, %s" % name

    def increment(self):
        self.counter += 1

    def get_val(self):
        return self.counter

    def get_data(self, data):
        print("GOT" + str(data))
        return data


s = zerorpc.Server(HelloRPC())
s.bind("tcp://0.0.0.0:3333")
s.run()
