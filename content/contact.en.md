+++
date = "2014-11-09T13:49:44+04:00"
draft = false
title = "Contact"
slug = "contact"
+++

<div class="py2">
  <form action="//formspree.io/your@email.address" method="POST" class="form-stacked form-light">
    <input type="text" name="email" class="input mobile-block" placeholder="Email Address">
    <textarea type="text" name="content" class="input mobile-block" rows="5" placeholder="What would you like to say?"></textarea>
    <input type="submit" class="button button-blue button-big mobile-block" value="Send">
  </form>
</div>



<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
</form>



