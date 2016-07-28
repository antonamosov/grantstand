@extends('showcase.layout')

@section('main-nav')
    <ul id="main-nav" class="nav-menu col-sm-12 col-md-9">
        <li class="nav-menu__item"><a href="services">Services</a></li>
        <li class="nav-menu__item active"><a href="clients">Clients</a></li>
        <li class="nav-menu__item"><a href="about">About Us</a></li>
        <li class="nav-menu__item"><a href="mobile">Mobile Technology</a></li>
    </ul>
    @stop


    @section('content')

<!-- Main-->
<main class="container"><h1 class="heading">Our Clients</h1>

    <div class="team__members row">
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-1.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Anthony Casalena</div>
                    <div class="bio__position">Video Prduction</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-2.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Andrew Bartholomew</div>
                    <div class="bio__position">Video Prduction</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-3.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">John Colton</div>
                    <div class="bio__position">YouTube Producer</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-4.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Ali Kazemi</div>
                    <div class="bio__position">YouTube Producer</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-1.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Anthony Casalena</div>
                    <div class="bio__position">Video Prduction</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-2.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Andrew Bartholomew</div>
                    <div class="bio__position">Video Prduction</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-3.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">John Colton</div>
                    <div class="bio__position">YouTube Producer</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-4.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Ali Kazemi</div>
                    <div class="bio__position">YouTube Producer</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-1.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Anthony Casalena</div>
                    <div class="bio__position">Video Prduction</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-2.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Andrew Bartholomew</div>
                    <div class="bio__position">Video Prduction</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-3.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">John Colton</div>
                    <div class="bio__position">YouTube Producer</div>
                </div>
            </div>
        </div>
        <div role="button" data-toggle="modal" data-target="#myModal-2" class="member member--client col-md-3"><img
                    src="images/team-4.jpg" class="member__photo">

            <div class="member__bio">
                <div class="bio__wrapper">
                    <div class="bio__name">Ali Kazemi</div>
                    <div class="bio__position">YouTube Producer</div>
                </div>
            </div>
        </div>
    </div>
</main><!-- End of Main-->

    @stop

@include('showcase.pages._modals')