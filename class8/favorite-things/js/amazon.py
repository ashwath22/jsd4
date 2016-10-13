import mechanize
URL = 'https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin' # amazon.in login page
EMAIL = 'ashwath.anand.22@gmail.com'
PASS = 'rollNO21'
#Link of the product that we are going to order
PRODUCT = 'https://www.amazon.com/Gatorade-Thirst-Quencher-Powder-Glacier/dp/B0052HV6EU/ref=sr_1_4_s_it?s=grocery&ie=UTF8&qid=1476174434&sr=1-4&keywords=gatorade&th=1'
#Creating a browser object
br = mechanize.Browser()
br.set_handle_robots(False)
br.set_handle_refresh(False)
br.addheaders = [('User-agent', 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008071615 Fedora/3.0.1-1.fc9 Firefox/3.0.1')]
#Open login page and inspect
response = br.open(URL)
#Print forms on URL. Not important, you can comment out this loop.
for form in br.forms():
    print "Form name:", form.name
    print form
    print
#Select form by name - "signIn"
br.select_form("signIn")
#Login: Fill 'controls' in 'signIn' form
br.form['email'] = EMAIL
br.form['password'] = PASS
br.method = "POST"
response = br.submit()
print response.geturl()
#Uncomment following two lines to check if you are logged in
#logincheck = response.read()
#print logincheck
print "++++++ LOGGED IN ++++++"
response = br.open(PRODUCT)
print response.geturl()
#Forms are arranged as a list data-type. You can select them using index number.
br.select_form(nr = 1)
req = br.click("submit.buy-nowsponse = br.open(req)
print "++++++ PRODUCT ++++++"
print response.geturl()
print "++++++ SELECTING COD & CONTINUE ++++++"
br.form = list(br.forms())[0] # Selecting form using index number of list.
#Selecting payment method.
br.form['paymentMethod'] = ['cashOnDeliveryCash']
#Selecting Continue control using its value because name wasn't availble.
for control in br.form.controls:
    if control.value == 'Continue':
        #print control
        #print control.name
        req1 = br.click(control.name)
        print req1
        response1 = br.open(req1)
print "++++++ PLACE ORDER ++++++"
br.select_form('spc') # Selecting form by name
order = br.click("placeYourOrder1Selecting control by name
response2 = br.open(order)